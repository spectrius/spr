/// <reference types="@rbxts/types" />

type SprTweenable = number | NumberRange | UDim | UDim2 | Vector2 | Vector3 | Color3;

interface spr {
	/**
	 * Animates the given properties towardes the target values, given damping ratio and frequency values.
	 */
	target: <T extends Instance>(
		obj: T,
		dampingRatio: number,
		undampedFrequency: number,
		targetProperties: Partial<FilterMembers<T, SprTweenable>>,
		ignoreDistanceCheck = false,
	) => void;

	/**
	 * Stops animations for a particular property. If a property is not specified, all properties belonging to the instance will stop animating.
	 */
	stop: <T extends Instance>(obj: T, property?: keyof FilterMembers<T, SprTweenable>) => void;
}

declare const spr: spr;
export = spr;
