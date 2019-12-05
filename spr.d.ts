type SprTweenable = number | NumberRange | UDim | UDim2 | Vector2 | Vector3 | Color3;

/**
 * **spr** animates an arbitrary property in the most optimal way with minimal fuss.
 *
 * Existing solutions for property animation have some combination of the following limitations:
 * - Continuity: Static-length animations and easing styles cause jarring discontinuities when the animation changes targets.
 * - Ease of use & robustness: Many spring-driven solutions use an Euler or RK4 approximation that applies forces based on stiffness, damping, and mass values. These numerical approximations tend to be unstable and require a fixed-timestep system to avoid blowing up. Stiffness/damping/mass parameters are impossible to tune intuitively and will explode with the wrong values.
 * - Boilerplate: Existing solutions require an extensive amount of boilerplate to support animating Roblox types.
 *
 * **spr** solves the above problems by providing a robust, easy to use spring model and tight integration with Roblox datatypes.
 */
interface spr {
	/**
	 * Animates the given properties towardes the desired values, given damping ratio and frequency values.
	 * Damping ratio below 1 will overshoot and gradually converge on the target.
	 * Damping ratio of exactly 1 will not overshoot (this is the fast path).
	 *
	 * The effect of damping ratio & frequency on the animation's appearance can be visualized here:
	 *
	 * https://www.desmos.com/calculator/rzvw27ljh9
	 */
	target: <T extends Instance>(
		obj: T,
		dampingRatio: number,
		undampedFrequency: number,
		targetProperties: Partial<FilterMembers<T, SprTweenable>>
	) => void;

	/**
	 * Stops the specified property from animating on an object.
	 */
	stop: <T extends Instance>(obj: T, property: keyof FilterMembers<T, SprTweenable>) => void;
}

declare const spr: spr;
export = spr;
