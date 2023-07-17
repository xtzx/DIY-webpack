export function welcome(name) {
    // return <h1>123123</h1>
    const h1Element = document.createElement('h1');
    h1Element.textContent = `Hello, ${name}!`;
    return h1Element;
}
