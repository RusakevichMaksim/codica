import { getWeatherThunkCreator } from "./weatherReducer";

test("thunk", async () => {
  const thunk = getWeatherThunkCreator("London");
  const dispatchMock = jest.fn();

  //@ts-ignore
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(1);
});
