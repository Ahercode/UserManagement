import {KTSVG} from './components/KTSVG'
import React from 'react'


type Props = {
  action?: boolean
  actionText?: string
  actionEnabled?: boolean
  cancel?: boolean
  cancelText?: string
  className?: string
  icon?: string
  actionLoading?: boolean
  actionHandler?: () => void
  cancelHandler?: () => void
  actionColor?: string
}

const ButtonActions: React.FC<Props> = ({
                                          action = true,
                                          actionText = 'Save',
                                          actionEnabled = true,
                                          cancel = true,
                                          cancelText = 'Cancel',
                                          className = 'mb-5 align-self-stretch w-100',
                                          icon = '/media/icons/duotune/general/gen055.svg',
                                          actionHandler = () => {
                                            console.log({actionText})
                                          },
                                          cancelHandler = () => {
                                            console.log('export')
                                          },
                                          actionLoading = false,
                                          actionColor = 'primary',
                                        }) => {
  return (
    <div className={`d-flex flex-stack  ${className}`}>
      <div>
        {cancel &&
          <button
            className="btn btn-sm btn-secondary btn-active-light-primary me-3"
            onClick={cancelHandler}
          >
            {cancelText}
          </button>
        }
        {action &&
          <button
            className={`btn  btn-sm btn-${actionEnabled ? `${actionColor}` : 'secondary'}`}
            onClick={actionHandler}
            type="submit"
            disabled={!actionEnabled || actionLoading}
          >
            {!actionLoading && <KTSVG
              path={icon}
              className="svg-icon-3 me-2"
            />}
            {!actionLoading && actionText}
            {actionLoading && (
              <span className="indicator-progress" style={{display: 'block'}}>
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
            )}
          </button>
        }

      </div>
    </div>
  )
}


type ProcessActionProps = {
  actionText: string
  actionEnabled?: boolean
  processingText?: string
  className?: string
  icon?: string
  showIcon?: boolean
  actionLoading: boolean
  actionHandler: () => void
}

const ProcessActionButton: React.FC<ProcessActionProps> = ({
                                                             actionText,
                                                             actionEnabled = true,
                                                             processingText = 'Processing...',
                                                             className = 'mb-5 align-self-stretch w-100',
                                                             showIcon = true,
                                                             icon = '/media/icons/duotune/general/gen055.svg',
                                                             actionHandler,
                                                             actionLoading,
                                                           }) => {
  return (
    <div className={`d-flex flex-stack  ${className}`}>
      <div>
        <button
          className={`btn btn-${actionEnabled ? 'primary' : 'secondary'}`}
          onClick={actionHandler}
          type="submit"
          disabled={!actionEnabled || actionLoading}
        >
          {showIcon && (!actionLoading) &&
            <KTSVG
              path={icon}
              className="svg-icon-3 me-2"
            />}
          {!actionLoading && actionText}
          {actionLoading && (
            <span className="indicator-progress" style={{display: 'block'}}>
                            {processingText}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
          )}
        </button>
      </div>
    </div>
  )
}

export {ButtonActions, ProcessActionButton}