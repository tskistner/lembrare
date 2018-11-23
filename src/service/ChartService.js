import Service from './Service';

class ChartService extends Service {
   
    getDataSource(data) {
        return this.sendPost('data', 'chart', data);
    }

}

export default (new ChartService());