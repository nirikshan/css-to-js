import { transformers, Transformer } from "../transformers";

/**
 * Finds a transformer with the specified ID.
 */
export function findTransformerById(
  id: number | string
): Transformer | undefined {
  if (typeof id === "string") {
    id = parseInt(id, 10);
  }

  return Object.values(transformers).find(tf => tf.id === id);
}

/**
 * Finds a transformer with the specified `from` and `to` format.
 * Both arguments can be omitted to weaken the constraints.
 */
export function findTransformerByFromTo(
  from?: string,
  to?: string
): Transformer | undefined {
  return Object.values(transformers).find(tf => {
    if (from !== undefined && to !== undefined) {
      return tf.from === from && tf.to === to;
    } else if (from !== undefined) {
      return tf.from === from;
    } else if (to !== undefined) {
      return tf.to === to;
    }
    return true;
  });
}
