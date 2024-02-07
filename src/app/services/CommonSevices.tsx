
type FieldData = {
    id: number,
    name: string,
}

type FieldDataProps = {
    fieldId: number,
    fieldData: FieldData[]  
}

export const getFieldName = ({fieldId, fieldData}:FieldDataProps) => {
    const field = fieldData?.find((item: FieldData) => {
      return item.id === fieldId
    })
    return field?.name
}