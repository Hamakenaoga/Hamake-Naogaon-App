import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  final String _sheetUrl = 'YOUR_GOOGLE_SHEET_APPS_SCRIPT_URL';

  Future<List> getBloodDonors() async {
    final response = await http.get(Uri.parse(_sheetUrl));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      return [];
    }
  }
}
