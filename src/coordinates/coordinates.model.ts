import { Schema } from 'mongoose';

export const CoordinatesSchema = new Schema({
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

export interface Coordinates {
  longitude: number;
  latitude: number;
}