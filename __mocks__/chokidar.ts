const chokidar = {
  watch: jest.fn().mockReturnValue({
    on: jest.fn(),
  }),
};

export default chokidar;
