export default jest
  .fn()
  .mockImplementationOnce(jest.fn())
  .mockImplementationOnce(() => {
    throw new Error('Validation error!');
  });
