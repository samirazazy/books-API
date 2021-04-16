const queries = require('../db/queries');
const dbConnection = require('../db/connection');
const util = require('../util/utility')


exports.getStoreList = (req, res) => {
  try {
    const storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    const result = await dbConnection.dbQuery(storeListQuery);
    return res.status(200).send(JSON.stringify(result));
  } catch (err) {
      console.log("ERROR:" + err)
    return res.status(500).send({ error: `faild to list store` });
  }
};

exports.getStoreList = (req, res) => {
    try {
        const createdBy = 'admin';
        const createdOn = new Date();
        const storCode = util.generateStoreCode()
      
        //req body
        let storeName = req.body.storeName;
        let address = req.body.address;
      
        if (!storeName || !address) {
          return res
            .status(500)
            .send({ errors: `storeName or address shouldn't be empty!` });
        }
        values=[storeName,storCode, address, createdBy, createdOn ]
        const saveStoretQuery = queries.queryList.SAVE_STORE_QUERY;
        await dbConnection.dbQuery(saveStoretQuery);

        return res.status(200).send("stor cerated successfully");
    } catch (err) {
        console.log("ERROR:" + err)
      return res.status(500).send({ error: `faild to save store` });
    }
  };