module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00a004ecced4612fef377e6dc5095dd6'),
  },
});
