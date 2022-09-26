import service from "../lib/request/request";
export function testApi() {
  return service({
    url: "hello",
    method: "get",
  });
}
