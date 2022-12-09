const { Info } = require('../../db/models');

const getInfo = async (req, res) => {
  const infoArray = req.body.flat();
  if (infoArray.length = 1) {
    const newInfo = await Info.create({
      profileName: infoArray[0],
    });
    return res.json({ name: infoArray[0], contacts: 'не обраружено' });
  }
  if (infoArray.length = 2) {
    const newInfo = await Info.create({
      profileName: infoArray[0],
      contactOne: infoArray[1],
    });
    return res.json({ name: infoArray[0], contacts: infoArray[1] });
  }
  if (infoArray.length = 3) {
    const newInfo = await Info.create({
      profileName: infoArray[0],
      contactOne: infoArray[1],
      contactTwo: infoArray[2],
    });
    return res.json({ name: infoArray[0], contacts: [infoArray[1], infoArray[2]] });
  }
  if (infoArray.length = 4) {
    const newInfo = await Info.create({
      profileName: infoArray[0],
      contactOne: infoArray[1],
      contactTwo: infoArray[2],
      contactThree: infoArray[3],
    });
    return res.json({ name: infoArray[0], contacts: [infoArray[1], infoArray[2], infoArray[3]] });
  }
};

const showInfo = async (req, res) => {
  const allInfo = Info.findAll();
  return res.json(allInfo);
};

module.exports = {
  getInfo, showInfo,
};
