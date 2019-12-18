uniform sampler2D postProcessingPosition;
uniform sampler2D nextParticlesSpeed;

varying vec2 v_textureCoordinates;

void main() {
	vec4 randomParticle = texture2D(postProcessingPosition, v_textureCoordinates);
	vec4 particleSpeed = texture2D(nextParticlesSpeed, v_textureCoordinates);
	
    if (randomParticle.a > 0.0) {
		gl_FragColor = vec4(0.0);
    } else {
		gl_FragColor = particleSpeed;
    }
}