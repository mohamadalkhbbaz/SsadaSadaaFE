 
/api/Category/getCategoryOptionsForBorrwoe?borrowerID=2&locationID=1 
/api/BorrowerReturnTransaction/getItemInfo?borrowerID=2&locationID=1&itemID=2



    https://accounts.transtek.com:2087/api/Item/getItemInfo?id=1
    https://accounts.transtek.com:2087/api/location/getLocationOptionsTree?headerLocationId=1&type=In&ignorePermission=false
    https://accounts.transtek.com:2087/api/location/GetLocationWithParentsList/3

/api/Category/getCategoryOptionsForBorrwoe?borrowerID=2&locationID=1
/api/Item/getItemInfo?id=1

existedShipment.CREATE_DATE = DateTime.TryParseExact(shipmentHeader.createDate, DateFormat, provider, DateTimeStyles.None, out DateTime createDate) ? createDate : DateTime.Now;


Task.FromResult(ordNumberConfigBL.UpdateLastNumber(""));

