import { createApp, type App } from 'vue'
import UiToast from '../components/ui/toast.vue'

export type ToastType = 'success' | 'info' | 'warning' | 'error'

export type ToastMessage = {
  id: number
  type: ToastType
  message: string
  title?: string
  handler?: () => void
}

type ToastRemoveAction = () => void

interface ToastAction {
  (message: string, title?: string, duration?: number, handler?: () => void): ToastRemoveAction
}

export interface ToastInterface {
  add: (message: string, type?: ToastType, title?: string, duration?: number, handler?: () => void) => number
  remove: (id: number) => void
  info: ToastAction
  success: ToastAction
  warning: ToastAction
  error: ToastAction
}

export const messages = ref<ToastMessage[]>([])

function alias(type: ToastType): ToastAction {
  return function (this: ToastInterface, message: string, title?: string, duration?: number, handler?: () => void) {
    const id = this.add(message, type, title, duration, handler);
    return () => this.remove(id);
  };
}

const toastImpl: ToastInterface = {
  /** Add a toast message */
  add(message: string, type?: ToastType, title?: string, duration?: number, handler?: () => void): number {
    const id = Date.now()
    if (!type) type = 'info'
    messages.value.push({
      id,
      type,
      message,
      title,
      handler,
    })
    if (duration) {
      globalThis?.setTimeout(() => {
        this.remove(id)
      }, duration)
    }
    return id
  },
  /** Remove a toast message if it exists */
  remove(id: number): void {
    const pos = messages.value.findIndex((message) => message.id === id)
    if (pos !== -1) {
      messages.value.splice(pos, 1)
    }
  },
  success: alias('success'),
  info: alias('info'),
  warning: alias('warning'),
  error: alias('error'),
}

let toastContainerApp: App | undefined;

export const useToast = (): ToastInterface => {
  // TODO: prepare the toast container component to the document if it doesn't exist
  if (!toastContainerApp) {
    const container = globalThis?.document?.createElement('div')
    globalThis?.document?.body.appendChild(container)
    toastContainerApp = createApp(UiToast)
    toastContainerApp.mount(container)
  }
  return toastImpl
}