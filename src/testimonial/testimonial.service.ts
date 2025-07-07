import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Testimonial } from './schemas/testimonial.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestimonialService {
  constructor(@InjectModel(Testimonial.name) private testimonialModel: Model<Testimonial>) { }

  async create(createTestimonialDto: CreateTestimonialDto): Promise<Testimonial> {
    const createdWord = new this.testimonialModel(createTestimonialDto);
    return await createdWord.save();
  }

  findAll() {
    return `This action returns all testimonial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testimonial`;
  }

  update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    return `This action updates a #${id} testimonial`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimonial`;
  }
}
