const text = `
uniform sampler2D colorTable;

varying float speedNormalization;

void main() {
    gl_FragColor = texture2D(colorTable, vec2(speedNormalization, 0.0));
}
`
export default text
