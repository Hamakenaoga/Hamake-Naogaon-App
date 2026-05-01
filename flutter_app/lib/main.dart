import 'package:flutter/material.dart';
import 'dashboard.dart';

void main() {
  runApp(const HamakeNaogaonApp());
}

class HamakeNaogaonApp extends StatelessWidget {
  const HamakeNaogaonApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'হামাকে নওগাঁ',
      theme: ThemeData(
        primaryColor: const Color(0xFF1B5E20), // Deep Green
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF1B5E20)),
        useMaterial3: true,
      ),
      home: const DashboardScreen(),
    );
  }
}
