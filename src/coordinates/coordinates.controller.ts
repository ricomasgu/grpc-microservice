import { Controller, Logger } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Coordinates } from './coordinates.model';

interface IResDB {
  res: string;
}

@Controller('coordinates')
export class CoordinatesController {
  private logger = new Logger('CoordinatesController');
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @GrpcMethod('CoordinatesController', 'AddCoordinates')
  addCoordinates(newCoordinates: Coordinates): IResDB {
    this.logger.log(
      'CoordinatesController: Calling the service to save the coordinates in the DB',
    );
    const { latitude, longitude } = newCoordinates;
    this.coordinatesService.addCoordinates(latitude, longitude);
    return { res: 'Coordinates saved!'};
  }
}
