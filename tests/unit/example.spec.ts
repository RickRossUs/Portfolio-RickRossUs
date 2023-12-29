describe('Exmaple component', ()=>{
  test('Tiene que ser mayor que 10', ()=>{
    //arrange
    let value = 5
    //estimulo
    value += 2
    //observar
    expect(value).toBeGreaterThan(10)
  })
})