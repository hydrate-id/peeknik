import regions from './regions.json'

interface Regions {
  [id: string]: {
    name: string
    regions: {
      [id: string]: {
        name: string
        districts: {
          [id: string]: {
            name: string
          }
        }
      }
    }
  }
}

const peeknik = (id: string | number) => {
  id = typeof id === 'string' ? id : id.toString()

  const provinceId = id.substring(0, 2)
  const regionId = id.substring(2, 4)
  const districtId = id.substring(4, 6)

  const province = (regions as Regions)[provinceId]
  const region = province?.regions[regionId]
  const district = region?.districts[districtId]

  const now = new Date().getFullYear().toString().substring(2, 4)
  const month = Number(id.substring(8, 10)) - 1

  let date = Number(id.substring(6, 8))
  let year = id.substring(10, 12)

  const unique = id.substring(12, 16)
  const gender: 'M' | 'F' = date < 40 ? 'M' : 'F'

  date = date > 40 ? date - 40 : date
  year = Number(now) > Number(year) ? `20${year}` : `19${year}`

  const valid = id.length === 16 && !!province?.name && !!region?.name && !!district?.name
  const dob = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`

  return {
    valid,
    province: valid ? province.name : null,
    region: valid ? region.name : null,
    district: valid ? district.name : null,
    gender: valid ? gender : null,
    dob: valid ? dob : null,
    unique: valid ? unique : null,
  }
}

export = peeknik
