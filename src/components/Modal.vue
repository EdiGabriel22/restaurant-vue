<template>
	<div v-if="show" class="fixed bg-black/[.5] top-0 left-0 w-full h-full z-20">
		<div class=" bg-white absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 md:col-5 col-11 rounded-xl  p-6">
			<div class="">
				<div class="w-full flex justify-end">
					<font-awesome-icon @click="oncloseButtonClick" icon="fa-x" class="p-2 cursor-pointer mb-4"/>
				</div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'modal',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		oncloseButtonClick() {
			this.$emit('on-modal-close')
		}
	}
}
</script>

<style>

</style>