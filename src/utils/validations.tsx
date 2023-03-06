export const LOGIN = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
  },
};

export const ADD_BLOG = {
  heading: {
    presence: true,
    length: {
      minimum: 1,
      message: " cannot be empty",
    },
  },
  author: {
    presence: true,
    length: {
      minimum: 1,
      message: " cannot be empty",
    },
  },
  description: {
    presence: true,
    length: {
      minimum: 1,
      message: " cannot be empty",
    },
  },
  link: {
    presence: true,
    length: {
      minimum: 1,
      message: " cannot be empty",
    },
  },
};

export const ADD_TEST = {
  name: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
  companyName: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
  designation: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
  testimonialContent: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
};

export const ADD_USER = {
  name: {
    presence: true,
    format: {
      pattern: "[a-zA-Z]+$",
      message: "can contain only letters",
    },
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
    numericality: false,
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters",
    },
  },
  confirmPassword: {
    presence: true,
    equality: "password",
  },
  role: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
};

export const EDIT_USER = {
  name: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
  email: {
    presence: true,
    email: true,
  },
  role: {
    presence: true,
    length: {
      minimum: 1,
      message: "cannot be empty",
    },
  },
};

export const FORGOT_PASSWORD = {
  email: {
    presence: true,
    email: true,
  },
};

export const PRICING = {
  basicPlan: {
    numericality: true,
    presence: true,
  },
  premiumPlan: {
    numericality: true,
    presence: true,
  },
};
