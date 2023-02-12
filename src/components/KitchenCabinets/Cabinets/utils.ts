enum CabinetsItems {
  base_cabinets = 'base_cabinets',
  corner_base = 'corner_base',
  corner_wall = 'corner_wall',
  pantry_cabinets = 'pantry_cabinets',
  wall_cabinets = 'wall_cabinets'
}

export const cabinetItems: Array<keyof typeof CabinetsItems> = ['pantry_cabinets', 'corner_base', 'corner_wall', 'wall_cabinets', 'base_cabinets'];
