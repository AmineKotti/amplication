<template>
    <el-form
        :model="form"
        label-width="120px"
        label-position="top"
        :rules="rules"
        ref="ruleFormRef"
    >
        <el-form-item label="Product name" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Product price" prop="price">
            <el-input-number :min="0" :max="100000" v-model="form.price" />
        </el-form-item>
        <el-form-item label="Product category" prop="category">
            <el-select v-model="form.category" placeholder="please select category">
                <el-option label="Consumer Products" value="consumers" />
                <el-option label="Industrial Products" value="industry" />
                <el-option label="Services" value="service" />
            </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker
                        v-model="form.date1"
                        type="date"
                        :placeholder="$t('entityForm.fields.date')"
                        style="width: 100%"
                    />
                </el-form-item>
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker
                        v-model="form.date2"
                        :placeholder="$t('entityForm.fields.time')"
                        style="width: 100%"
                    />
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="creation date">
            <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Product type" prop="type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="type 1" name="type" />
                <el-checkbox label="type 2" name="type" />
                <el-checkbox label="type 3" name="type" />
                <el-checkbox label="type 4" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="form.resource">
                <el-radio label="Sponsor" />
                <el-radio label="Venue" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Description" prop="desc">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="upload file">
            <div class="gallery" id="gallery">
                <UploadButton
                    :uploadImage="previewMultiImage"
                    :title="'Télécharger une image'"
                    :src="'/svg/icons/icon_upload.svg'"
                    :alt="'icon upload'"
                    :description="$t('entityForm.validation.fileSize')"
                />
                <template v-if="preview_list.length">
                    <div
                        v-for="item, index in preview_list"
                        :key="index"
                        class="image__wrapper"
                        @click="() => handleRemoveFile(index)"
                    >
                        <inline-svg class="close-icon" src="/svg/icons/cancel.svg"></inline-svg>
                        <img :src="item" />
                    </div>
                </template>
            </div>
        </el-form-item>

        <div class="d-flex justify-content-end">
            <el-button @click="resetForm(ruleFormRef)">Cancel</el-button>
            <el-button type="primary" @click="onSubmit(ruleFormRef)">Create</el-button>
        </div>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, ref } from 'vue';
import UploadButton from '@/components/forms/UploadButton.vue';


import type { ElForm } from "element-plus";
import { t } from "@/core/i18n/translate";
import { Components } from "@tekab-dev-team/storybook-devfactory";
let errorFileSizeMessage: string | null;
let errorFileTypeMessage: string | null;
interface NewEntityData {
    name: string;
    price: number,
    category: string,
    date1: Date | null,
    date2: Date | null,
    delivery: boolean,
    type: Array<string>,
    resource: string,
    desc: string,
    image_list: Array<any>
}

export default defineComponent({
    components: {
        UploadButton

    },
    setup() {
        const form: NewEntityData = reactive({
            name: '',
            price: 0,
            category: '',
            date1: null,
            date2: null,
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            image_list: []
        })
        const preview_list = ref([]) as any
        const ruleFormRef = ref<InstanceType<typeof ElForm>>();
        const rules = reactive({
            name: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: "blur",
                },
                {
                    min: 3,
                    message: `${t('entityForm.validation.length')}`,
                    trigger: "blur",
                },
            ],
            price: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: "blur",
                },
            ],
            category: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: "change",
                },
            ],
            date1: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: 'change',
                },
            ],
            date2: [
                {
                    type: 'date',
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: 'change',
                },
            ],
            desc: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: "blur",
                },
            ],


            type: [
                {
                    type: 'array',
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: 'change',
                },
            ],
            resource: [
                {
                    required: true,
                    message: `${t('entityForm.validation.required')}`,
                    trigger: 'change',
                },]
        });
        errorFileSizeMessage = t("entityForm.validation.fileSize")
        errorFileTypeMessage = t("entityForm.validation.fileType")
        const previewMultiImage = (event: any) => {
            let input = event.target;
            let count = input.files.length;
            if (input.files[0].size > 10 * 1024 * 1024) {
                event.preventDefault();
                Components.ElMessage.error(errorFileSizeMessage);
                return;
            }

            if (!["image/png", "image/jpg", "image/jpeg",].includes(input.files[0].type)) {
                event.preventDefault();
                Components.ElMessage.error(errorFileTypeMessage);
                return;
            }
            let index = 0;
            if (input.files) {
                while (count--) {
                    let reader = new FileReader();
                    reader.onload = (e: any) => {
                        preview_list.value = [...preview_list.value, e.target.result];
                    }
                    form.image_list = [...form.image_list, input.files[index]];
                    reader.readAsDataURL(input.files[index]);
                    index++;
                }
            }
            input.value = ''

        }
        const handleRemoveFile = (index: number) => {
            form.image_list = form.image_list.filter((file: any, i: number) => i !== index)
            preview_list.value = preview_list.value.filter((file: any, i: number) => i !== index)
        }

        const onSubmit = (formEl: InstanceType<typeof ElForm> | undefined) => {
            if (!formEl) return;
            formEl.validate((valid) => {
                if (valid) {
                    console.log("submit!", form);
                } else {
                    console.log("error submit!");
                    return false;
                }
            });
        };
        const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
            if (!formEl) return;
            preview_list.value = []
            form.image_list = []
            formEl.resetFields();
        };
        return {
            onSubmit,
            form,
            rules,
            ruleFormRef,
            resetForm,
            preview_list,
            previewMultiImage,
            handleRemoveFile,
            t

        }
    },
});
</script>
<style lang="scss" scoped>
.gallery {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 2px;
    .image__wrapper {
        width: 204px;
        height: 78px;
        border: 1px dashed $color-yellow;
        border-radius: 6px;
        position: relative;

        img {
            max-width: 202px;
            max-height: 75px;
            border-radius: 6px;
            width: auto;
            height: auto;
        }
        .close-icon {
            position: absolute;
            top: 5px;
            right: 5px;
        }
    }
}
</style>
