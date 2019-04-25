const text = `
uniform sampler2D colorTable;

varying float relativeSpeed;

void main() {
    gl_FragColor = texture2D(colorTable, vec2(relativeSpeed, 0.0));
}`

export default text
