import get from "lodash/get";

const foo = { bar: "foobar" };

document.body.style.background = "black";
document.body.style.color = "lawngreen";

document.body.innerHTML = `
<pre style="font-size: 42px;">
    > lodash.get(foo, "bar"):
    > ${get(foo, "bar")}
</pre>
`;
