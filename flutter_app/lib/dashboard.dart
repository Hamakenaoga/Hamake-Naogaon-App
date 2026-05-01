import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('হামাকে নওগাঁ'), backgroundColor: const Color(0xFF1B5E20), foregroundColor: Colors.white),
      body: Column(
        children: [
          CarouselSlider(
            options: CarouselOptions(height: 150.0),
            items: [1, 2, 3].map((i) {
              return Builder(
                builder: (BuildContext context) {
                  return Container(width: MediaQuery.of(context).size.width, margin: const EdgeInsets.symmetric(horizontal: 5.0), color: Colors.greenAccent, child: Center(child: Text('বিজ্ঞাপন $i', style: const TextStyle(fontSize: 16.0))));
                },
              );
            }).toList(),
          ),
          Expanded(
            child: GridView.count(
              crossAxisCount: 2,
              children: [
                _gridButton(Icons.warning, 'জরুরি সাহায্য'),
                _gridButton(Icons.local_hospital, 'ডাক্তার'),
                _gridButton(Icons.shopping_cart, 'বাজার'),
                _gridButton(Icons.newspaper, 'খবর'),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _gridButton(IconData icon, String label) {
    return Card(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [Icon(icon, size: 50, color: const Color(0xFF1B5E20)), Text(label)],
      ),
    );
  }
}
