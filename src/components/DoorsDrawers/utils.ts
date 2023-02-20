const defaultClass = 'cabinet-doors__';
const classBuilder = (block: string, className?: string) => `${defaultClass}${block}${className ? `_${className}` : ''}`;
export const previewClassBuilder = (className?: string) => classBuilder('preview', className);
export const catalogClassBuilder = (className?: string) => classBuilder('catalog', className);
