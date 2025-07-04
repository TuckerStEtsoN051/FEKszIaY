use TreeMongo;
var item = db.categoriesAAO.findOne({_id:"Nokia"})
path=item.ancestors;
//Electronics / Cell_Phones_and_Accessories / Cell_Phones_and_Smartphones