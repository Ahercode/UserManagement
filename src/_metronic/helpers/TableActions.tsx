import React from 'react'
import {KTSVG} from './components/KTSVG'


type TableActionProps = {
  positive?: boolean
  delete?: boolean
  className?: string
  positiveIcon?: string
  positiveColor?: string
  positiveHandler?: () => void
  positiveEnabled?: boolean
  deleteHandler?: () => void
}

const TableActions: React.FC<TableActionProps> = ({
                                                    delete: delBtn = true,
                                                    positive: updateBtn = true,
                                                    className = '',
                                                    positiveHandler = () => {
                                                      console.log('update')
                                                    },
                                                    deleteHandler = () => {
                                                      console.log('delete')
                                                    },
                                                    positiveColor = 'warning',
                                                    positiveIcon = '/media/icons/duotune/general/gen055.svg',
                                                    positiveEnabled = true,
                                                  }) => {
  return (
    <div className={`d-flex ${className}`}>
      {updateBtn &&
        <button
          type="button"
          className={`btn btn-icon btn-light-${positiveColor} btn-sm me-2`}
          disabled={!positiveEnabled}
          onClick={positiveHandler}
        >
          <KTSVG
            path={positiveIcon}
            className={`svg-icon-2 svg-icon-${positiveColor}`}
          />
          {''}
        </button>
      }
      {delBtn &&
        <button
          type="button"
          className="btn btn-icon btn-light-danger btn-sm"
          onClick={deleteHandler}
        >
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon-2 svg-icon-danger"
          />
          {''}
        </button>
      }
    </div>
  )
}

export {TableActions}