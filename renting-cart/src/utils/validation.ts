export const validateEmailLogin = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePasswordLogin = (password: string): boolean => {
    return password.length >= 6;
  };
  
  export const validateName = (name: string) => {
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "El nombre solo debe contener letras.";
    }
    return "";
  };
  
  export const validateEmail = (email: string) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Debe ingresar un correo electrónico válido.";
    }
    return "";
  };
  
  export const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres.";
    }
    return "";
  };
  
  export const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      return "Las contraseñas no coinciden.";
    }
    return "";
  };
  
  export const validatePhone = (phone: string) => {
    if (!/^\d+$/.test(phone)) {
      return "El número de teléfono solo debe contener números.";
    }
    return "";
  };
  
  export const validateAddress = (address: string) => {
    if (address.trim() === "") {
      return "La dirección es obligatoria.";
    }
    return "";
  };
  