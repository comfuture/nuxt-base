<template>
  <div>
    Please
    <ui-popover class="p-4 border border-gray-500 rounded shadow">
      Click me
      <template #popover>
        Will be shown when popover is triggered
      </template>
    </ui-popover>
    to see the popover.
    Please upload material
    <ui-popover trigger="hover" placement="bottom">
      <sup>
        <ui-icon name="help" class="text-xs text-gray-400 filled"></ui-icon>
      </sup>
      <template #popover>
        <div class="p-4 border border-gray-500 rounded shadow">
          <div class="flex items-center">
            <ui-icon name="exclamation-circle" class="text-[color:primary]"></ui-icon>
            <div class="ml-2">
              <div class="text-[color:primary]">Please upload material</div>
              <div class="text-[color:secondary]">Please upload material</div>
            </div>
          </div>
        </div>
      </template>
    </ui-popover>

    <ui-item>
      Please upload material

      <ui-popover placement="bottom" :offset="[0, 10]">
        <ui-icon name="help" class="text-xs text-gray-400"></ui-icon>
        <template #popover>
          <ui-item class="p-4 rounded border border-gray-300 shadow bg-white/70 backdrop-blur">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </ui-item>
        </template>
      </ui-popover>
    </ui-item>

    <ui-popover class="bg-white border border-gray-500 shadow rounded">
      <ui-button>Click me</ui-button>
      <template #popover>
        <ui-item>
          asdfasdfasdfaskdjf alskdjf alskd fl
        </ui-item>
      </template>
    </ui-popover>
  </div>
</template>