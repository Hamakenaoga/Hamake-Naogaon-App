import 'package:flutter/material.dart';
import 'api_service.dart';

class DonorListScreen extends StatefulWidget {
  const DonorListScreen({super.key});
  @override
  State<DonorListScreen> createState() => _DonorListScreenState();
}

class _DonorListScreenState extends State<DonorListScreen> {
  final ApiService _api = ApiService();
  List _donors = [];

  @override
  void initState() {
    super.initState();
    _fetchDonors();
  }

  void _fetchDonors() async {
    _donors = await _api.getBloodDonors();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('রক্তদাতা তালিকা')),
      body: ListView.builder(
        itemCount: _donors.length,
        itemBuilder: (context, index) {
          return ListTile(title: Text(_donors[index]['name']), subtitle: Text(_donors[index]['blood_group']));
        },
      ),
    );
  }
}
