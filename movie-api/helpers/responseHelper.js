const ResponseHelper = {
  response: (res, success = true, status, code, message = '', data) => {
    res.status(status).json({
      success,
      status,
      code,
      message,
      body: { ...data },
    });
  },

  error: (res, error) => {
    const status = error.status || 500;
    const code = error.code || 'ERROR';
    console.log(status);
    res.status(status).json({
      success: false,
      status,
      code,
      message: error.message ? error.message : 'Something went wrong!',
      body: error,
    });
  },
};

export default ResponseHelper;
