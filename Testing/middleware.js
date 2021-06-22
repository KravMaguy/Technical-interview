// page: The page of the resource to fetch. Defaults to 1. [NUMBER]
// limit: The number of items to return in a response. Defaults to 3. [NUMBER]
// skip: The actual number of items that have to skip while fetching the data. Its value is ((page - 1) * limit). [NUMBER]
// searchTerm: The search term to be used in the data-store query. The term is extracted from the q query parameter. [STRING]
// search: A Regex expression that can be evaluated to match the names of the items in the recipes. The search should be global and case insensitive ("gi"). [RegexP]

module.exports = (req, res, next) => {
    let page=req.query.page||1
    let limit=req.query.limit||3
    let skip=req.query.skip||(page - 1) * limit
    let searchTerm=req.query.q||''
    let search=`/${searchTerm}/gi`||''
    let context
    context={page,limit,skip,search,searchTerm}
    req.context=context
    next(req)
 
};
