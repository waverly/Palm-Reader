import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(pages, [key]) {
      return pages.filter(page => {
          return page.data['exhibition.title'].value[0].text === key; // <------
      });
  }

}
