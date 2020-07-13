module.exports.ok = function(res, payload) {
  return res.status(200).json({ message: 'ok', ...payload });
};
