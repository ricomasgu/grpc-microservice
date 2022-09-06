import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Coordinates } from './coordinates.model';

@Injectable()
export class CoordinatesService {

  constructor(
    @InjectModel('Coordinates')
    private readonly coordinatesModel: Model<Coordinates>,
  ) {}

  async addCoordinates(latitude: number, longitude: number ) {
    const newCoordinates = new this.coordinatesModel({ latitude, longitude });
    await newCoordinates.save();
  }
}
