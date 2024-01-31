<script setup lang="ts">
import type { DateLike } from '../../types';

const props = withDefaults(defineProps<{
  value?: DateLike,
  month?: boolean,
  time?: boolean | 'auto',
  relative?: boolean,
}>(), {
  time: 'auto'
})

const date = computed(() => {
  const date = new Date(props.value ?? '')
  return date
})

const locale = inject('locale', 'en-US');

const isInvalid = (date: Date) => isNaN(date.getTime())

const dateString = computed(() => {
  if (isInvalid(date.value)) {
    return 'Invalid Date'
  }

  if (props.month) {
    const formatter = new Intl.DateTimeFormat(unref(locale), {
      year: 'numeric',
      month: 'long',
    })
    return formatter.format(date.value)
  }

  const timeOptions = {}

  if (props.time === 'auto') {
    if (Date.now() < date.value.getTime() + 86400000) {
      Object.assign(timeOptions, {
        hour: '2-digit',
        minute: '2-digit',
      })
    }
  } else if (props.time) {
    Object.assign(timeOptions, {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // in the future
  if (Date.now() < date.value.getTime()) {
    const formatter = new Intl.DateTimeFormat(unref(locale), {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...timeOptions
    })
    return formatter.format(date.value)
  }
  if (props.relative) {
    // if date is within 1 minute
    if (Date.now() - date.value.getTime() < 60 * 1000) {
      return 'Just now'
    }
    // if date is within 24 hours
    if (Date.now() - date.value.getTime() < 24 * 60 * 60 * 1000) {
      // format related to now
      const formatter = new Intl.RelativeTimeFormat(unref(locale), {
        style: 'narrow'
      })
      return formatter.format(Math.floor((date.value.getTime() - Date.now()) / 1000 / 60 / 60), 'hours')
    }
    // if date is within 7 days
    if (Date.now() - date.value.getTime() < 7 * 24 * 60 * 60 * 1000) {
      // format related to now
      const formatter = new Intl.RelativeTimeFormat(unref(locale), {
        style: 'narrow'
      })
      return formatter.format(Math.floor((date.value.getTime() - Date.now()) / 1000 / 60 / 60 / 24), 'days')
    }
  }
  // if same year
  if (date.value.getFullYear() === new Date().getFullYear()) {
    // format related to now
    const formatter = new Intl.DateTimeFormat(unref(locale), {
      month: 'long',
      day: 'numeric',
      ...timeOptions
    })
    return formatter.format(date.value)
  }
  // else
  const formatter = new Intl.DateTimeFormat(unref(locale), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...timeOptions
  })
  return formatter.format(date.value)
})


</script>
<template>
  <time :datetime="'' + value">{{ dateString }}</time>
</template>
