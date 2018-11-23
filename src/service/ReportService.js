import User from './../repository/User';
import Service from './Service';

class ReportService extends Service {

    all() {
        return this.send('all', 'report');
    }

    add(data) {
        data.idUsuario = User.getIdUser();
        return this.sendPost('add', 'report', data);
    }

    delete(data) {
        return this.sendPost('delete', 'report', data)
    }

    update(data) {
        data.idUsuario = User.getIdUser();
        return this.sendPost('update', 'report', data);
    }

}

export default (new ReportService());