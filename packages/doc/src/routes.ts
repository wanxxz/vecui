import { index, rootRoute, route } from '@tanstack/virtual-file-routes'

export const routes = rootRoute('root.tsx', [index('index.tsx'), route('button', 'button.tsx')])
