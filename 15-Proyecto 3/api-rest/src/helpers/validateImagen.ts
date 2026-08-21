export const validateImage = (extension: string | undefined): boolean => {
  return( 
     extension === "png" ||
     extension === "jpg" || 
     extension === "jpeg"
    );
};
