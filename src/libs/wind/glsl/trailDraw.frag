uniform sampler2D segmentsColorTexture;
uniform sampler2D segmentsDepthTexture;

uniform sampler2D currentTrailsColor;
uniform sampler2D trailsDepthTexture;

uniform float fadeOpacity;

varying vec2 textureCoordinate;

void main() {
    vec4 pointsColor = texture2D(segmentsColorTexture, textureCoordinate);
    vec4 trailsColor = texture2D(currentTrailsColor, textureCoordinate);

    trailsColor = floor(fadeOpacity * 255.0 * trailsColor) / 255.0; // make sure the trailsColor will be strictly decreased

    float pointsDepth = texture2D(segmentsDepthTexture, textureCoordinate).r;
    float trailsDepth = texture2D(trailsDepthTexture, textureCoordinate).r;
	float globeDepth = czm_unpackDepth(texture2D(czm_globeDepthTexture, textureCoordinate));
	
	gl_FragColor = vec4(0.0);
	if (pointsDepth < globeDepth) {
		gl_FragColor = gl_FragColor + pointsColor;
	}
	if (trailsDepth < globeDepth) {
		gl_FragColor = gl_FragColor + trailsColor;
	}
	gl_FragDepthEXT = min(pointsDepth, trailsDepth);
}