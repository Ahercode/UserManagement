import {KTSVG} from './components/KTSVG'
import React from 'react'


type PageActionProps = {
  search?: boolean
  showSearchButton?: boolean
  add?: boolean
  addText?: string
  export?: boolean
  upload?: boolean
  searchText?: string
  className?: string
  searchHandler?: () => void
  addHandler?: () => void
  exportHandler?: () => void
  uploadHandler?: () => void
  onSearchTextChange?: (text: string) => void
  actionIcon?: string
  trailingContent?: React.ReactNode
  leadingContent?: boolean
  leadingContentAction?: () => void
  leadingContentText?: string
  leadingContentIcon?: string
}

const PageActions: React.FC<PageActionProps> = ({
                                                  search = true,
                                                  showSearchButton = false,
                                                  add = true,
                                                  addText = 'Add',
                                                  export: exportBtn = false,
                                                  upload = false,
                                                  searchText,
                                                  className = 'mb-5 align-self-stretch w-100',
                                                  searchHandler = () => {
                                                    console.log(searchText)
                                                  },
                                                  addHandler = () => {
                                                    console.log('add')
                                                  },
                                                  uploadHandler = () => {
                                                    console.log('upload')
                                                  },
                                                  exportHandler = () => {
                                                    console.log('export')
                                                  },
                                                  onSearchTextChange = (text: string) => {
                                                    console.log(text)
                                                  },
                                                  actionIcon = '/media/icons/duotune/arrows/arr009.svg',
                                                  trailingContent = null,
                                                  leadingContent = false,
                                                  leadingContentAction = () => {
                                                    console.log('leading content')
                                                  },
                                                  leadingContentText = 'Leading Content',
                                                  leadingContentIcon = '/media/icons/duotune/arrows/arr009.svg',
                                                }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchTextChange) {
      onSearchTextChange(event.target.value)
    }
  }
  return (
    <div className={`d-flex flex-row justify-content-between  ${className}`}>
      {search &&
        <div className="d-flex align-items-center position-relative">
                    <span className="svg-icon svg-icon-1 position-absolute ms-3 me-3">
                        <KTSVG
                          path="/media/icons/duotune/general/gen021.svg"
                          className="svg-icon-1 svg-icon-gray-500"
                        />
                    </span>
          <input
            type="text"
            className="form-control form-control-solid ps-12"
            name="search"
            value={searchText}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          {showSearchButton &&
            <button
              className="btn btn-primary ms-2"
              onClick={searchHandler}
            >
              Search
            </button>
          }
        </div>
      }

      <div>
        {leadingContent &&
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={leadingContentAction}
          >
            <KTSVG
              path={leadingContentIcon}
              className="svg-icon-3"
            />
            {leadingContentText}
          </button>
        }
        {add &&
          <button
            className="btn btn-primary btn-sm"
            onClick={addHandler}
          >
            <KTSVG
              path={actionIcon}
              className="svg-icon-3"
            />
            {addText}
          </button>
        }
        {exportBtn &&
          <button
            className="btn btn-light-primary btn-sm ms-2"
            onClick={exportHandler}
          >
            <KTSVG
              path="/media/icons/duotune/arrows/arr076.svg"
              className="svg-icon-3"
            />
            Export
          </button>
        }
        {upload &&
          <button
            className="btn btn-light-primary btn-sm ms-2"
            onClick={uploadHandler}
          >
            <KTSVG
              path="/media/icons/duotune/arrows/arr045.svg"
              className="svg-icon-3"
            />
            Upload
          </button>
        }
        {trailingContent && trailingContent}
      </div>
    </div>
  )
}

export {PageActions}