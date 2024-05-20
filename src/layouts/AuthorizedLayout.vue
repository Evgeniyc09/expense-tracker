<script setup lang="ts">
import BreadcrumbDashboard from '@/components/dashboard/BreadcrumbDashboard.vue'
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import SidebarDashboard from '@/components/dashboard/sidebar/SidebarDashboard.vue'
import ContentDashboard from '@/components/dashboard/ContentDashboard.vue'
</script>

<template>
	<!-- ========== HEADER ========== -->
	<HeaderDashboard />
	<!-- ========== END HEADER ========== -->

	<!-- ========== MAIN CONTENT ========== -->
	<!-- Breadcrumb -->
	<BreadcrumbDashboard />
	<!-- End Breadcrumb -->

	<!-- Sidebar -->
	<SidebarDashboard />
	<!-- End Sidebar -->

	<!-- Content -->
	<ContentDashboard>
		<RouterView />
	</ContentDashboard>
	<!-- End Content -->
	<!-- ========== END MAIN CONTENT ========== -->
</template>
