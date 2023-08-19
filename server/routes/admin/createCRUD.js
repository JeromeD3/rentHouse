/**
 * 
 * 如果有特殊的业务场景，需要更换为mvc架构
 */
module.exports = function createCRUD(router) {
  router.post('/', async (req, res) => {
    // 传递非模型内的字段会被过滤掉
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.get('/', async (req, res) => {
    const queryOptions = {}
    // if (req.Model.modelName === 'Category') {
    //   queryOptions.populate = 'parent'
    // }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    const queryOptions = {}
    // if (req.Model.modelName === 'Player') {
      // queryOptions.populate = ['categories']
    // }
    const model = await req.Model.findById(req.params.id).setOptions(queryOptions)
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({ success: true })
  })
}
