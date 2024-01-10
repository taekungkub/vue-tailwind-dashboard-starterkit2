<template>
  <!-- <button class="btn btn-primary" @click="isModal = true">Modal</button> -->
  <transition name="modal">
    <div class="modal-mask p-2" v-if="isModal">
      <div class="modal-wrapper" @click="clickOutSide()">
        <div class="modal-container" :class="{ 'modal-sm': sm, 'modal-lg': lg, active: isActive }" @click.stop>
          <div class="modal-header">
            <div class="flex justify-between items-center">
              <span>
                <slot name="header"> Welcome </slot>
              </span>

              <button class="btn btn-sm btn-close-modal" @click="close()" v-if="!noClose && !loading">
                <!-- <i class="fa fa-times" aria-hidden="true"></i> -->
                <svg viewBox="0 0 24 24" color="primary" width="17px" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="modal-body">
            <slot name="content"> Modal body </slot>
          </div>

          <div class="modal-footer" v-if="!hideFooter">
            <slot name="footer">
              <button class="btn btn-light mr-2" @click="handleAction('cancle')">Close</button>
              <button class="btn btn-primary" @click="handleAction('confirm')" :disabled="loading">Action</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    noClose: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isModal: false,
      isActive: false,
    };
  },

  created() {},
  methods: {
    open() {
      this.isModal = true;
      document.body.classList.add("modal-open");
    },
    close() {
      this.isModal = false;
      document.body.classList.remove("modal-open");
    },
    clickOutSide() {
      if (this.loading || this.static) {
        if (!this.isActive) {
          this.isActive = true;
        }

        setTimeout(() => {
          this.isActive = false;
        }, 300);
        return;
      }
      this.isModal = false;
      this.$emit("close");
    },
    handleAction(action) {
      if (action === "cancle") {
        this.isModal = false;
        this.$emit("handleActions", action);
      } else if (action === "confirm") {
        this.$emit("handleActions", action);
      }
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed !important;
  z-index: 1000 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 500px;
  margin: 0px auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 13px;
  background-color: #fff;

  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s; /* Animation */
}

.modal-container.active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.modal-mask .modal-sm {
  max-width: 370px !important;
}

.modal-mask .modal-lg {
  max-width: 830px !important;
}

.modal-header {
  padding: 16px 16px;
}

.modal-header span {
  @apply font-bold text-xl;
}

.modal-body {
  position: relative;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  width: 100%;
  will-change: transform;
  direction: ltr;
  word-break: break-all;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-close-modal {
}

.btn-close-modal:hover {
  @apply opacity-60;
}

.btn-close-modal svg {
  fill: var(--color-text-3);
}
</style>
