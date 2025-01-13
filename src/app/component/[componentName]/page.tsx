import ComponentWrapper from "@/components/ComponentWrapper/ComponentWrapper";

export default async function componentPage({ params }: { params: Promise<{ componentName: string }> }) {
    const componentName = decodeURIComponent((await params).componentName);

    return <ComponentWrapper name={componentName} />;
}
