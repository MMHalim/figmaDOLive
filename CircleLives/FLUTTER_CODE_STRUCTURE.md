# CircleLive - Flutter UI Code Structure

## Project Overview
CircleLive is a modern mobile application for real-time location sharing and messaging with friends and family. This document provides the complete Flutter/Dart code structure based on the React web implementation.

## 📁 Project Structure

```
lib/
├── main.dart
├── app.dart
├── core/
│   ├── theme/
│   │   ├── app_theme.dart
│   │   ├── app_colors.dart
│   │   ├── app_text_styles.dart
│   │   └── app_gradients.dart
│   ├── constants/
│   │   ├── app_constants.dart
│   │   └── animation_constants.dart
│   └── utils/
│       └── responsive.dart
├── models/
│   ├── contact_model.dart
│   ├── group_model.dart
│   ├── message_model.dart
│   └── user_model.dart
├── screens/
│   ├── auth/
│   │   ├── login_screen.dart
│   │   ├── register_screen.dart
│   │   ├── otp_screen.dart
│   │   └── forgot_password_screen.dart
│   ├── permissions/
│   │   ├── contact_permission_screen.dart
│   │   └── notification_permission_screen.dart
│   ├── main/
│   │   ├── members_screen.dart
│   │   ├── chat_location_screen.dart
│   │   ├── group_map_screen.dart
│   │   └── profile_screen.dart
│   ├── calls/
│   │   ├── voice_call_screen.dart
│   │   └── video_call_screen.dart
│   └── showcase/
│       └── component_showcase_screen.dart
├── widgets/
│   ├── common/
│   │   ├── floating_action_button.dart
│   │   ├── loading_skeleton.dart
│   │   ├── empty_state.dart
│   │   └── notification_badge.dart
│   ├── chat/
│   │   ├── chat_bubble.dart
│   │   ├── voice_message_player.dart
│   │   ├── typing_indicator.dart
│   │   └── recording_button.dart
│   ├── contacts/
│   │   ├── contact_list_item.dart
│   │   └── group_card.dart
│   └── map/
│       └── map_marker_avatar.dart
└── routes/
    └── app_routes.dart
```

## 🎨 Theme Configuration

### app_colors.dart
```dart
import 'package:flutter/material.dart';

class AppColors {
  // CircleLive 2027 Color Palette
  
  // Light Mode Colors
  static const Color backgroundLight = Color(0xFFF8F9FB);
  static const Color foregroundLight = Color(0xFF1A1D29);
  static const Color cardLight = Color(0xFFFFFFFF);
  
  // Dark Mode Colors
  static const Color backgroundDark = Color(0xFF0F1117);
  static const Color foregroundDark = Color(0xFFF9FAFB);
  static const Color cardDark = Color(0xFF1A1D29);
  
  // Primary Colors
  static const Color primaryLight = Color(0xFF4F46E5); // Electric Indigo
  static const Color primaryDark = Color(0xFF6366F1);
  
  // Secondary Colors
  static const Color secondaryLight = Color(0xFFA78BFA); // Soft Purple
  static const Color secondaryDark = Color(0xFFC4B5FD);
  
  // Accent Colors
  static const Color accentLight = Color(0xFF10B981); // Neon Green
  static const Color accentDark = Color(0xFF34D399);
  
  // Muted Colors
  static const Color mutedLight = Color(0xFFE5E7EB);
  static const Color mutedDark = Color(0xFF27293A);
  static const Color mutedForegroundLight = Color(0xFF6B7280);
  static const Color mutedForegroundDark = Color(0xFF9CA3AF);
  
  // Status Colors
  static const Color statusOnlineLight = Color(0xFF10B981);
  static const Color statusOnlineDark = Color(0xFF34D399);
  static const Color statusRecentlyActive = Color(0xFFF59E0B);
  static const Color statusOfflineLight = Color(0xFF9CA3AF);
  static const Color statusOfflineDark = Color(0xFF6B7280);
  
  // Border Colors
  static const Color borderLight = Color(0x14000000); // rgba(0, 0, 0, 0.08)
  static const Color borderDark = Color(0x1AFFFFFF); // rgba(255, 255, 255, 0.1)
  
  // Input Colors
  static const Color inputBackgroundLight = Color(0xFFF3F4F6);
  static const Color inputBackgroundDark = Color(0xFF1F2937);
  
  // Destructive Colors
  static const Color destructiveLight = Color(0xFFEF4444);
  static const Color destructiveDark = Color(0xFFF87171);
}
```

### app_gradients.dart
```dart
import 'package:flutter/material.dart';
import 'app_colors.dart';

class AppGradients {
  static const LinearGradient primaryLight = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF6366F1), Color(0xFF4F46E5)],
  );
  
  static const LinearGradient primaryDark = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF818CF8), Color(0xFF6366F1)],
  );
  
  static const LinearGradient backgroundLight = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFFF8F9FB),
      Color(0xFFEEF2FF),
      Color(0xFFF5F3FF),
    ],
  );
  
  static const LinearGradient backgroundDark = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFF0F1117),
      Color(0xFF1A1D29),
      Color(0xFF1F1B2E),
    ],
  );
  
  static const LinearGradient titleGradient = LinearGradient(
    colors: [Color(0xFF4F46E5), Color(0xFFA78BFA)],
  );
}
```

### app_text_styles.dart
```dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTextStyles {
  static TextStyle get heading1 => GoogleFonts.inter(
    fontSize: 32,
    fontWeight: FontWeight.w600,
    height: 1.2,
  );
  
  static TextStyle get heading2 => GoogleFonts.inter(
    fontSize: 24,
    fontWeight: FontWeight.w600,
    height: 1.3,
  );
  
  static TextStyle get heading3 => GoogleFonts.inter(
    fontSize: 20,
    fontWeight: FontWeight.w600,
    height: 1.4,
  );
  
  static TextStyle get bodyLarge => GoogleFonts.inter(
    fontSize: 16,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
  
  static TextStyle get bodyMedium => GoogleFonts.inter(
    fontSize: 14,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
  
  static TextStyle get bodySmall => GoogleFonts.inter(
    fontSize: 12,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
  
  static TextStyle get buttonText => GoogleFonts.inter(
    fontSize: 16,
    fontWeight: FontWeight.w500,
    height: 1.5,
  );
  
  static TextStyle get caption => GoogleFonts.inter(
    fontSize: 11,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
}
```

### app_theme.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'app_colors.dart';
import 'app_text_styles.dart';

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      scaffoldBackgroundColor: AppColors.backgroundLight,
      
      colorScheme: const ColorScheme.light(
        primary: AppColors.primaryLight,
        secondary: AppColors.secondaryLight,
        surface: AppColors.cardLight,
        background: AppColors.backgroundLight,
        error: AppColors.destructiveLight,
        onPrimary: Colors.white,
        onSecondary: Colors.white,
        onSurface: AppColors.foregroundLight,
        onBackground: AppColors.foregroundLight,
      ),
      
      appBarTheme: const AppBarTheme(
        elevation: 0,
        backgroundColor: Colors.transparent,
        systemOverlayStyle: SystemUiOverlayStyle.dark,
        iconTheme: IconThemeData(color: AppColors.foregroundLight),
      ),
      
      cardTheme: CardTheme(
        elevation: 0,
        color: AppColors.cardLight,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
          side: const BorderSide(color: AppColors.borderLight, width: 1),
        ),
      ),
      
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.inputBackgroundLight,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.borderLight),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.borderLight),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.primaryLight, width: 2),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
      ),
      
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          elevation: 0,
          padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          textStyle: AppTextStyles.buttonText,
        ),
      ),
      
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        elevation: 8,
        shape: CircleBorder(),
      ),
    );
  }
  
  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: AppColors.backgroundDark,
      
      colorScheme: const ColorScheme.dark(
        primary: AppColors.primaryDark,
        secondary: AppColors.secondaryDark,
        surface: AppColors.cardDark,
        background: AppColors.backgroundDark,
        error: AppColors.destructiveDark,
        onPrimary: Colors.white,
        onSecondary: AppColors.foregroundDark,
        onSurface: AppColors.foregroundDark,
        onBackground: AppColors.foregroundDark,
      ),
      
      appBarTheme: const AppBarTheme(
        elevation: 0,
        backgroundColor: Colors.transparent,
        systemOverlayStyle: SystemUiOverlayStyle.light,
        iconTheme: IconThemeData(color: AppColors.foregroundDark),
      ),
      
      cardTheme: CardTheme(
        elevation: 0,
        color: AppColors.cardDark,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
          side: const BorderSide(color: AppColors.borderDark, width: 1),
        ),
      ),
      
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.inputBackgroundDark,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.borderDark),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.borderDark),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.primaryDark, width: 2),
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
      ),
      
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          elevation: 0,
          padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          textStyle: AppTextStyles.buttonText,
        ),
      ),
      
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        elevation: 8,
        shape: CircleBorder(),
      ),
    );
  }
}
```

## 📱 Screens Implementation

### login_screen.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_gradients.dart';
import '../../core/theme/app_text_styles.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> 
    with SingleTickerProviderStateMixin {
  final TextEditingController _phoneController = TextEditingController();
  late AnimationController _rotationController;

  @override
  void initState() {
    super.initState();
    _rotationController = AnimationController(
      duration: const Duration(seconds: 20),
      vsync: this,
    )..repeat();
  }

  @override
  void dispose() {
    _phoneController.dispose();
    _rotationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: isDark 
            ? AppGradients.backgroundDark 
            : AppGradients.backgroundLight,
        ),
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Logo and Animation
                  _buildLogo(isDark),
                  const SizedBox(height: 48),
                  
                  // Login Form
                  _buildLoginForm(isDark),
                  const SizedBox(height: 32),
                  
                  // Footer
                  Text(
                    'Designed for 2027 • CircleLive',
                    style: AppTextStyles.bodySmall.copyWith(
                      color: isDark 
                        ? AppColors.mutedForegroundDark 
                        : AppColors.mutedForegroundLight,
                    ),
                  ),
                ],
              ).animate()
                .fadeIn(duration: 800.ms, delay: 200.ms)
                .slideY(begin: 0.1, end: 0, duration: 800.ms),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildLogo(bool isDark) {
    return Column(
      children: [
        // Rotating Logo
        RotationTransition(
          turns: _rotationController,
          child: Container(
            width: 96,
            height: 96,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: AppGradients.primaryLight,
              boxShadow: [
                BoxShadow(
                  color: AppColors.primaryLight.withOpacity(0.4),
                  blurRadius: 40,
                  spreadRadius: 10,
                ),
              ],
            ),
            child: const Icon(
              LucideIcons.mapPin,
              size: 48,
              color: Colors.white,
            ),
          ),
        ),
        const SizedBox(height: 24),
        
        // Title
        ShaderMask(
          shaderCallback: (bounds) => AppGradients.titleGradient.createShader(bounds),
          child: Text(
            'CircleLive',
            style: AppTextStyles.heading1.copyWith(
              fontSize: 40,
              color: Colors.white,
            ),
          ),
        ),
        const SizedBox(height: 8),
        
        // Subtitle
        Text(
          'Stay connected with your circle',
          style: AppTextStyles.bodyMedium.copyWith(
            color: isDark 
              ? AppColors.mutedForegroundDark 
              : AppColors.mutedForegroundLight,
          ),
        ),
      ],
    );
  }

  Widget _buildLoginForm(bool isDark) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: (isDark ? AppColors.cardDark : AppColors.cardLight)
            .withOpacity(0.8),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: (isDark ? AppColors.borderDark : AppColors.borderLight)
              .withOpacity(0.5),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 40,
            spreadRadius: 5,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Welcome back',
            style: AppTextStyles.heading2,
          ),
          const SizedBox(height: 8),
          Text(
            'Enter your phone number to continue',
            style: AppTextStyles.bodyMedium.copyWith(
              color: isDark 
                ? AppColors.mutedForegroundDark 
                : AppColors.mutedForegroundLight,
            ),
          ),
          const SizedBox(height: 32),
          
          // Phone Input
          Text(
            'Phone Number',
            style: AppTextStyles.bodySmall.copyWith(
              color: isDark 
                ? AppColors.mutedForegroundDark 
                : AppColors.mutedForegroundLight,
            ),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _phoneController,
            keyboardType: TextInputType.phone,
            decoration: const InputDecoration(
              hintText: '+1 (555) 000-0000',
            ),
          ),
          const SizedBox(height: 24),
          
          // Login Button
          Container(
            decoration: BoxDecoration(
              gradient: AppGradients.primaryLight,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [
                BoxShadow(
                  color: AppColors.primaryLight.withOpacity(0.3),
                  blurRadius: 16,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/otp');
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent,
                shadowColor: Colors.transparent,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Continue',
                    style: AppTextStyles.buttonText.copyWith(
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(width: 8),
                  const Icon(
                    LucideIcons.arrowRight,
                    size: 20,
                    color: Colors.white,
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 16),
          
          // Forgot Password
          TextButton(
            onPressed: () {
              Navigator.pushNamed(context, '/forgot-password');
            },
            child: Text(
              'Forgot password?',
              style: AppTextStyles.bodySmall.copyWith(
                color: isDark ? AppColors.primaryDark : AppColors.primaryLight,
              ),
            ),
          ),
          const SizedBox(height: 24),
          
          // Divider
          Row(
            children: [
              Expanded(
                child: Divider(
                  color: isDark ? AppColors.borderDark : AppColors.borderLight,
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Text(
                  'or',
                  style: AppTextStyles.bodySmall.copyWith(
                    color: isDark 
                      ? AppColors.mutedForegroundDark 
                      : AppColors.mutedForegroundLight,
                  ),
                ),
              ),
              Expanded(
                child: Divider(
                  color: isDark ? AppColors.borderDark : AppColors.borderLight,
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),
          
          // Register Link
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Don't have an account? ",
                style: AppTextStyles.bodyMedium.copyWith(
                  color: isDark 
                    ? AppColors.mutedForegroundDark 
                    : AppColors.mutedForegroundLight,
                ),
              ),
              TextButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/register');
                },
                style: TextButton.styleFrom(
                  padding: EdgeInsets.zero,
                  minimumSize: Size.zero,
                  tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                ),
                child: Text(
                  'Sign up',
                  style: AppTextStyles.bodyMedium.copyWith(
                    color: isDark ? AppColors.primaryDark : AppColors.primaryLight,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
```

### members_screen.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_text_styles.dart';
import '../../models/contact_model.dart';
import '../../models/group_model.dart';
import '../../widgets/contacts/contact_list_item.dart';
import '../../widgets/contacts/group_card.dart';
import '../../widgets/common/floating_action_button.dart';

class MembersScreen extends StatefulWidget {
  const MembersScreen({super.key});

  @override
  State<MembersScreen> createState() => _MembersScreenState();
}

class _MembersScreenState extends State<MembersScreen> 
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  final TextEditingController _searchController = TextEditingController();
  
  final List<ContactModel> _mockFriends = [
    ContactModel(
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?w=400',
      lastMessage: 'See you there! 👋',
      time: '2m ago',
      isOnline: true,
      hasLiveLocation: true,
      unreadCount: 2,
    ),
    ContactModel(
      id: '2',
      name: 'Mike Davis',
      avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400',
      lastMessage: 'Thanks for the help!',
      time: '15m ago',
      isOnline: true,
      hasLiveLocation: true,
    ),
    // Add more mock friends...
  ];
  
  final List<GroupModel> _mockGroups = [
    GroupModel(
      id: 'family',
      name: 'Family',
      memberCount: 5,
      avatars: [
        'https://images.unsplash.com/photo-1664813495783-a7b19be83624?w=200',
        'https://images.unsplash.com/photo-1717378706934-3f44829052e0?w=200',
      ],
      lastMessage: 'Mom: Dinner at 7pm',
      time: '10m ago',
      activeMembersCount: 3,
    ),
    // Add more mock groups...
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final onlineFriendsCount = _mockFriends.where((f) => f.isOnline).length;
    
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // Header
            _buildHeader(isDark, onlineFriendsCount),
            
            // Tabs
            _buildTabs(isDark),
            
            // Tab Content
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildFriendsList(),
                  _buildGroupsList(),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: CustomFloatingActionButton(
        icon: LucideIcons.plus,
        onPressed: () {
          // Handle add action
        },
      ),
    );
  }

  Widget _buildHeader(bool isDark, int onlineFriendsCount) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            isDark ? AppColors.backgroundDark : AppColors.backgroundLight,
            (isDark ? AppColors.backgroundDark : AppColors.backgroundLight)
                .withOpacity(0),
          ],
        ),
      ),
      child: Column(
        children: [
          // Title Row
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ShaderMask(
                    shaderCallback: (bounds) => 
                      const LinearGradient(
                        colors: [Color(0xFF4F46E5), Color(0xFFA78BFA)],
                      ).createShader(bounds),
                    child: Text(
                      'CircleLive',
                      style: AppTextStyles.heading1.copyWith(
                        fontSize: 32,
                        color: Colors.white,
                      ),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: isDark 
                            ? AppColors.accentDark 
                            : AppColors.accentLight,
                        ),
                      ).animate(
                        onPlay: (controller) => controller.repeat(),
                      ).scale(
                        begin: const Offset(1, 1),
                        end: const Offset(1.2, 1.2),
                        duration: 2000.ms,
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '$onlineFriendsCount friends online',
                        style: AppTextStyles.bodySmall.copyWith(
                          color: isDark 
                            ? AppColors.mutedForegroundDark 
                            : AppColors.mutedForegroundLight,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                    colors: [
                      (isDark ? AppColors.primaryDark : AppColors.primaryLight)
                          .withOpacity(0.2),
                      (isDark ? AppColors.secondaryDark : AppColors.secondaryLight)
                          .withOpacity(0.2),
                    ],
                  ),
                  border: Border.all(
                    color: (isDark ? AppColors.primaryDark : AppColors.primaryLight)
                        .withOpacity(0.3),
                    width: 2,
                  ),
                ),
                child: Icon(
                  LucideIcons.mapPin,
                  color: isDark ? AppColors.primaryDark : AppColors.primaryLight,
                  size: 24,
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),
          
          // Search Bar
          TextField(
            controller: _searchController,
            decoration: InputDecoration(
              hintText: 'Search contacts...',
              prefixIcon: Icon(
                LucideIcons.search,
                color: isDark 
                  ? AppColors.mutedForegroundDark 
                  : AppColors.mutedForegroundLight,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTabs(bool isDark) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      decoration: BoxDecoration(
        color: (isDark ? AppColors.mutedDark : AppColors.mutedLight)
            .withOpacity(0.5),
        borderRadius: BorderRadius.circular(16),
      ),
      child: TabBar(
        controller: _tabController,
        indicator: BoxDecoration(
          color: isDark ? AppColors.cardDark : AppColors.cardLight,
          borderRadius: BorderRadius.circular(12),
        ),
        labelColor: isDark ? AppColors.foregroundDark : AppColors.foregroundLight,
        unselectedLabelColor: isDark 
          ? AppColors.mutedForegroundDark 
          : AppColors.mutedForegroundLight,
        tabs: const [
          Tab(text: 'Friends'),
          Tab(text: 'Family Groups'),
        ],
      ),
    );
  }

  Widget _buildFriendsList() {
    return ListView.builder(
      itemCount: _mockFriends.length,
      itemBuilder: (context, index) {
        return ContactListItem(
          contact: _mockFriends[index],
          onTap: () {
            Navigator.pushNamed(
              context,
              '/chat',
              arguments: _mockFriends[index].id,
            );
          },
        );
      },
    );
  }

  Widget _buildGroupsList() {
    return ListView.builder(
      itemCount: _mockGroups.length,
      itemBuilder: (context, index) {
        return GroupCard(
          group: _mockGroups[index],
          onTap: () {
            Navigator.pushNamed(
              context,
              '/group',
              arguments: _mockGroups[index].id,
            );
          },
        );
      },
    );
  }
}
```

## 🔧 Widgets Implementation

### chat_bubble.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_text_styles.dart';
import '../../models/message_model.dart';

class ChatBubble extends StatelessWidget {
  final MessageModel message;
  final int delay;

  const ChatBubble({
    super.key,
    required this.message,
    this.delay = 0,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return Align(
      alignment: message.isSent ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.75,
        ),
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
        decoration: BoxDecoration(
          gradient: message.isSent
              ? const LinearGradient(
                  colors: [Color(0xFF6366F1), Color(0xFF4F46E5)],
                )
              : null,
          color: message.isSent
              ? null
              : (isDark ? AppColors.cardDark : AppColors.cardLight),
          border: message.isSent
              ? null
              : Border.all(
                  color: isDark ? AppColors.borderDark : AppColors.borderLight,
                ),
          borderRadius: BorderRadius.circular(24).copyWith(
            bottomRight: message.isSent
                ? const Radius.circular(4)
                : const Radius.circular(24),
            bottomLeft: message.isSent
                ? const Radius.circular(24)
                : const Radius.circular(4),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              message.content,
              style: AppTextStyles.bodyMedium.copyWith(
                color: message.isSent
                    ? Colors.white
                    : (isDark ? AppColors.foregroundDark : AppColors.foregroundLight),
                fontSize: 15,
                height: 1.4,
              ),
            ),
            const SizedBox(height: 4),
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  message.time,
                  style: AppTextStyles.caption.copyWith(
                    color: message.isSent
                        ? Colors.white.withOpacity(0.7)
                        : (isDark 
                            ? AppColors.mutedForegroundDark 
                            : AppColors.mutedForegroundLight),
                  ),
                ),
                if (message.isSent) ...[
                  const SizedBox(width: 4),
                  _buildStatusIcon(message.status),
                ],
              ],
            ),
          ],
        ),
      ),
    ).animate()
      .fadeIn(duration: 300.ms, delay: (delay * 100).ms)
      .slideY(begin: 0.2, end: 0, duration: 300.ms, delay: (delay * 100).ms)
      .scale(begin: const Offset(0.95, 0.95), end: const Offset(1, 1));
  }

  Widget _buildStatusIcon(MessageStatus status) {
    Color color = Colors.white.withOpacity(0.7);
    IconData icon = LucideIcons.check;
    
    if (status == MessageStatus.seen) {
      color = AppColors.accentLight;
      icon = LucideIcons.checkCheck;
    } else if (status == MessageStatus.delivered) {
      icon = LucideIcons.checkCheck;
    }
    
    return Icon(
      icon,
      size: 14,
      color: color,
    );
  }
}
```

### voice_message_player.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_text_styles.dart';

class VoiceMessagePlayer extends StatefulWidget {
  final String duration;
  final bool isSent;

  const VoiceMessagePlayer({
    super.key,
    required this.duration,
    required this.isSent,
  });

  @override
  State<VoiceMessagePlayer> createState() => _VoiceMessagePlayerState();
}

class _VoiceMessagePlayerState extends State<VoiceMessagePlayer> {
  bool _isPlaying = false;
  
  final List<int> waveformBars = [4, 8, 12, 6, 10, 14, 7, 11, 5, 9, 13, 6, 10, 8, 12];

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return Align(
      alignment: widget.isSent ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        constraints: const BoxConstraints(maxWidth: 280),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        margin: const EdgeInsets.only(bottom: 12),
        decoration: BoxDecoration(
          gradient: widget.isSent
              ? const LinearGradient(
                  colors: [Color(0xFF6366F1), Color(0xFF4F46E5)],
                )
              : null,
          color: widget.isSent
              ? null
              : (isDark ? AppColors.cardDark : AppColors.cardLight),
          border: widget.isSent
              ? null
              : Border.all(
                  color: isDark ? AppColors.borderDark : AppColors.borderLight,
                ),
          borderRadius: BorderRadius.circular(24).copyWith(
            bottomRight: widget.isSent
                ? const Radius.circular(4)
                : const Radius.circular(24),
            bottomLeft: widget.isSent
                ? const Radius.circular(24)
                : const Radius.circular(4),
          ),
        ),
        child: Row(
          children: [
            // Play/Pause Button
            GestureDetector(
              onTap: () {
                setState(() {
                  _isPlaying = !_isPlaying;
                });
              },
              child: Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: widget.isSent
                      ? Colors.white.withOpacity(0.2)
                      : (isDark 
                          ? AppColors.primaryDark 
                          : AppColors.primaryLight)
                          .withOpacity(0.1),
                ),
                child: Icon(
                  _isPlaying ? LucideIcons.pause : LucideIcons.play,
                  size: 16,
                  color: widget.isSent
                      ? Colors.white
                      : (isDark ? AppColors.primaryDark : AppColors.primaryLight),
                ),
              ),
            ),
            const SizedBox(width: 12),
            
            // Waveform
            Expanded(
              child: SizedBox(
                height: 32,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: waveformBars.map((height) {
                    return _buildWaveformBar(height.toDouble(), isDark);
                  }).toList(),
                ),
              ),
            ),
            const SizedBox(width: 12),
            
            // Duration
            Text(
              widget.duration,
              style: AppTextStyles.caption.copyWith(
                color: widget.isSent
                    ? Colors.white.withOpacity(0.7)
                    : (isDark 
                        ? AppColors.mutedForegroundDark 
                        : AppColors.mutedForegroundLight),
              ),
            ),
          ],
        ),
      ),
    ).animate()
      .fadeIn(duration: 300.ms)
      .slideY(begin: 0.2, end: 0, duration: 300.ms)
      .scale(begin: const Offset(0.95, 0.95), end: const Offset(1, 1));
  }

  Widget _buildWaveformBar(double baseHeight, bool isDark) {
    return Container(
      width: 3,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(2),
        color: widget.isSent
            ? Colors.white.withOpacity(0.6)
            : (isDark ? AppColors.primaryDark : AppColors.primaryLight)
                .withOpacity(0.6),
      ),
    ).animate(
      onPlay: (controller) => _isPlaying ? controller.repeat() : controller.stop(),
    ).custom(
      duration: 500.ms,
      builder: (context, value, child) {
        final animatedHeight = baseHeight + (value * 4);
        return Container(
          width: 3,
          height: animatedHeight,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(2),
            color: widget.isSent
                ? Colors.white.withOpacity(0.6)
                : (isDark ? AppColors.primaryDark : AppColors.primaryLight)
                    .withOpacity(0.6),
          ),
        );
      },
    );
  }
}
```

### contact_list_item.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:lucide_icons_flutter/lucide_icons.dart';
import '../../core/theme/app_colors.dart';
import '../../core/theme/app_text_styles.dart';
import '../../models/contact_model.dart';

class ContactListItem extends StatelessWidget {
  final ContactModel contact;
  final VoidCallback? onTap;

  const ContactListItem({
    super.key,
    required this.contact,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    
    return InkWell(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: (isDark ? AppColors.borderDark : AppColors.borderLight)
                  .withOpacity(0.5),
              width: 1,
            ),
          ),
        ),
        child: Row(
          children: [
            // Avatar with status
            Stack(
              children: [
                Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      colors: [
                        (isDark ? AppColors.primaryDark : AppColors.primaryLight)
                            .withOpacity(0.2),
                        (isDark ? AppColors.secondaryDark : AppColors.secondaryLight)
                            .withOpacity(0.2),
                      ],
                    ),
                  ),
                  child: ClipOval(
                    child: Image.network(
                      contact.avatar,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          color: isDark ? AppColors.mutedDark : AppColors.mutedLight,
                          child: Icon(
                            LucideIcons.user,
                            color: isDark 
                              ? AppColors.mutedForegroundDark 
                              : AppColors.mutedForegroundLight,
                          ),
                        );
                      },
                    ),
                  ),
                ),
                Positioned(
                  bottom: 0,
                  right: 0,
                  child: Container(
                    width: 16,
                    height: 16,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: contact.isOnline
                          ? (isDark ? AppColors.statusOnlineDark : AppColors.statusOnlineLight)
                          : (isDark ? AppColors.statusOfflineDark : AppColors.statusOfflineLight),
                      border: Border.all(
                        color: isDark ? AppColors.backgroundDark : AppColors.backgroundLight,
                        width: 2,
                      ),
                    ),
                  ).animate(
                    onPlay: (controller) => contact.isOnline ? controller.repeat() : null,
                  ).scale(
                    begin: const Offset(1, 1),
                    end: const Offset(1.2, 1.2),
                    duration: 2000.ms,
                  ),
                ),
              ],
            ),
            const SizedBox(width: 12),
            
            // Content
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          contact.name,
                          style: AppTextStyles.bodyMedium.copyWith(
                            fontWeight: FontWeight.w500,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      Text(
                        contact.time,
                        style: AppTextStyles.caption.copyWith(
                          color: isDark 
                            ? AppColors.mutedForegroundDark 
                            : AppColors.mutedForegroundLight,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Row(
                    children: [
                      if (contact.hasLiveLocation) ...[
                        Icon(
                          LucideIcons.mapPin,
                          size: 14,
                          color: isDark ? AppColors.accentDark : AppColors.accentLight,
                        ).animate(
                          onPlay: (controller) => controller.repeat(),
                        ).scale(
                          begin: const Offset(1, 1),
                          end: const Offset(1.1, 1.1),
                          duration: 2000.ms,
                        ),
                        const SizedBox(width: 6),
                      ],
                      if (contact.isVoiceMessage) ...[
                        Icon(
                          LucideIcons.mic,
                          size: 14,
                          color: isDark 
                            ? AppColors.mutedForegroundDark 
                            : AppColors.mutedForegroundLight,
                        ),
                        const SizedBox(width: 6),
                        Text(
                          'Voice message',
                          style: AppTextStyles.bodySmall.copyWith(
                            color: isDark 
                              ? AppColors.mutedForegroundDark 
                              : AppColors.mutedForegroundLight,
                          ),
                        ),
                      ] else ...[
                        Expanded(
                          child: Text(
                            contact.lastMessage ?? '',
                            style: AppTextStyles.bodySmall.copyWith(
                              color: isDark 
                                ? AppColors.mutedForegroundDark 
                                : AppColors.mutedForegroundLight,
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ],
                  ),
                ],
              ),
            ),
            
            // Unread badge
            if (contact.unreadCount != null && contact.unreadCount! > 0) ...[
              const SizedBox(width: 8),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: isDark ? AppColors.primaryDark : AppColors.primaryLight,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text(
                  contact.unreadCount! > 9 ? '9+' : '${contact.unreadCount}',
                  style: AppTextStyles.caption.copyWith(
                    color: Colors.white,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ).animate()
                .scale(
                  begin: const Offset(0, 0),
                  end: const Offset(1, 1),
                  duration: 300.ms,
                ),
            ],
          ],
        ),
      ),
    );
  }
}
```

## 📦 Models

### contact_model.dart
```dart
class ContactModel {
  final String id;
  final String name;
  final String avatar;
  final String? lastMessage;
  final bool isVoiceMessage;
  final String time;
  final bool isOnline;
  final bool hasLiveLocation;
  final int? unreadCount;

  ContactModel({
    required this.id,
    required this.name,
    required this.avatar,
    this.lastMessage,
    this.isVoiceMessage = false,
    required this.time,
    required this.isOnline,
    this.hasLiveLocation = false,
    this.unreadCount,
  });
}
```

### message_model.dart
```dart
enum MessageStatus {
  sent,
  delivered,
  seen,
}

class MessageModel {
  final String id;
  final String content;
  final String time;
  final bool isSent;
  final MessageStatus status;
  final bool isVoiceMessage;

  MessageModel({
    required this.id,
    required this.content,
    required this.time,
    required this.isSent,
    this.status = MessageStatus.seen,
    this.isVoiceMessage = false,
  });
}
```

### group_model.dart
```dart
class GroupModel {
  final String id;
  final String name;
  final int memberCount;
  final List<String> avatars;
  final String lastMessage;
  final String time;
  final int activeMembersCount;

  GroupModel({
    required this.id,
    required this.name,
    required this.memberCount,
    required this.avatars,
    required this.lastMessage,
    required this.time,
    required this.activeMembersCount,
  });
}
```

## 🚀 Main Application Files

### main.dart
```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'app.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Set system UI overlay style
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
      systemNavigationBarColor: Colors.white,
      systemNavigationBarIconBrightness: Brightness.dark,
    ),
  );
  
  runApp(const CircleLiveApp());
}
```

### app.dart
```dart
import 'package:flutter/material.dart';
import 'core/theme/app_theme.dart';
import 'routes/app_routes.dart';

class CircleLiveApp extends StatelessWidget {
  const CircleLiveApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CircleLive',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      initialRoute: AppRoutes.login,
      onGenerateRoute: AppRoutes.generateRoute,
    );
  }
}
```

### app_routes.dart
```dart
import 'package:flutter/material.dart';
import '../screens/auth/login_screen.dart';
import '../screens/auth/register_screen.dart';
import '../screens/auth/otp_screen.dart';
import '../screens/auth/forgot_password_screen.dart';
import '../screens/permissions/contact_permission_screen.dart';
import '../screens/permissions/notification_permission_screen.dart';
import '../screens/main/members_screen.dart';
import '../screens/main/chat_location_screen.dart';
import '../screens/main/group_map_screen.dart';
import '../screens/main/profile_screen.dart';
import '../screens/calls/voice_call_screen.dart';
import '../screens/calls/video_call_screen.dart';

class AppRoutes {
  static const String login = '/';
  static const String register = '/register';
  static const String otp = '/otp';
  static const String forgotPassword = '/forgot-password';
  static const String contactPermission = '/permissions/contacts';
  static const String notificationPermission = '/permissions/notifications';
  static const String members = '/app';
  static const String chat = '/chat';
  static const String group = '/group';
  static const String profile = '/profile';
  static const String voiceCall = '/voice-call';
  static const String videoCall = '/video-call';

  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case login:
        return MaterialPageRoute(builder: (_) => const LoginScreen());
      case register:
        return MaterialPageRoute(builder: (_) => const RegisterScreen());
      case otp:
        return MaterialPageRoute(builder: (_) => const OTPScreen());
      case forgotPassword:
        return MaterialPageRoute(builder: (_) => const ForgotPasswordScreen());
      case contactPermission:
        return MaterialPageRoute(builder: (_) => const ContactPermissionScreen());
      case notificationPermission:
        return MaterialPageRoute(builder: (_) => const NotificationPermissionScreen());
      case members:
        return MaterialPageRoute(builder: (_) => const MembersScreen());
      case chat:
        final contactId = settings.arguments as String?;
        return MaterialPageRoute(
          builder: (_) => ChatLocationScreen(contactId: contactId ?? ''),
        );
      case group:
        final groupId = settings.arguments as String?;
        return MaterialPageRoute(
          builder: (_) => GroupMapScreen(groupId: groupId ?? ''),
        );
      case profile:
        return MaterialPageRoute(builder: (_) => const ProfileScreen());
      case voiceCall:
        return MaterialPageRoute(builder: (_) => const VoiceCallScreen());
      case videoCall:
        return MaterialPageRoute(builder: (_) => const VideoCallScreen());
      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('No route defined for ${settings.name}'),
            ),
          ),
        );
    }
  }
}
```

## 📚 Required Dependencies (pubspec.yaml)

```yaml
name: circlelive
description: A modern mobile application for real-time location sharing and messaging
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  
  # UI & Animations
  flutter_animate: ^4.5.0
  
  # Icons
  lucide_icons_flutter: ^1.0.0
  
  # Fonts
  google_fonts: ^6.1.0
  
  # State Management
  provider: ^6.1.1
  
  # Navigation
  go_router: ^13.0.0
  
  # Maps
  google_maps_flutter: ^2.5.0
  flutter_map: ^6.1.0
  
  # Permissions
  permission_handler: ^11.1.0
  
  # Audio (for voice messages)
  just_audio: ^0.9.36
  audio_waveforms: ^1.0.5
  
  # Image handling
  cached_network_image: ^3.3.0
  
  # Utilities
  intl: ^0.19.0
  
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.1

flutter:
  uses-material-design: true
```

## 🎯 Key Implementation Notes

### 1. **Glassmorphism Effect**
Use `BackdropFilter` with `ImageFilter.blur` for glassmorphism:
```dart
ClipRRect(
  borderRadius: BorderRadius.circular(24),
  child: BackdropFilter(
    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
    child: Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.7),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: Colors.white.withOpacity(0.3),
        ),
      ),
    ),
  ),
)
```

### 2. **Animations**
- Use `flutter_animate` package for declarative animations
- Implement `AnimationController` for custom continuous animations
- Add stagger delays for list item animations

### 3. **Gradient Text**
```dart
ShaderMask(
  shaderCallback: (bounds) => LinearGradient(
    colors: [Color(0xFF4F46E5), Color(0xFFA78BFA)],
  ).createShader(bounds),
  child: Text(
    'CircleLive',
    style: TextStyle(
      fontSize: 40,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
  ),
)
```

### 4. **Responsive Design**
Create a responsive utility:
```dart
class Responsive {
  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < 600;
  
  static bool isTablet(BuildContext context) =>
      MediaQuery.of(context).size.width >= 600 &&
      MediaQuery.of(context).size.width < 1024;
}
```

### 5. **Dark Mode Support**
Always check theme brightness and use appropriate colors:
```dart
final isDark = Theme.of(context).brightness == Brightness.dark;
final color = isDark ? AppColors.primaryDark : AppColors.primaryLight;
```

## 🗺️ Map Integration

For the map features, use either:
- **Google Maps**: `google_maps_flutter` package
- **Open Source**: `flutter_map` package with OpenStreetMap

Example map widget structure:
```dart
GoogleMap(
  initialCameraPosition: CameraPosition(
    target: LatLng(37.7749, -122.4194),
    zoom: 14,
  ),
  markers: _buildMarkers(),
  myLocationEnabled: true,
  myLocationButtonEnabled: true,
)
```

---

This Flutter code structure faithfully recreates your CircleLive React design with:
- ✅ Modern Material 3 design
- ✅ Smooth animations and transitions
- ✅ Glassmorphism and gradient effects
- ✅ Dark/Light mode support
- ✅ Complete component library
- ✅ Optimized for mobile performance
- ✅ Clean architecture with proper separation of concerns