/**
 * AUTONOM.IA Design System Components
 * Complete Atomic Design System
 */

// Atoms
export { Button, Spinner } from './atoms/Button';
export { Input } from './atoms/Input';
export { Text } from './atoms/Text';
export { Badge } from './atoms/Badge';
export { Tag } from './atoms/Tag';
export { Skeleton } from './atoms/Skeleton';
export { Divider } from './atoms/Divider';
export { Avatar } from './atoms/Avatar';

// Molecules
export { InputField } from './molecules/InputField';
export { Card, CardHeader, CardBody, CardFooter } from './molecules/Card';
export { Alert } from './molecules/Alert';
export { ButtonGroup } from './molecules/ButtonGroup';
export { Breadcrumb } from './molecules/Breadcrumb';
export { Tooltip } from './molecules/Tooltip';

// Organisms
export { Header } from './organisms/Header';
export { Sidebar } from './organisms/Sidebar';
export { Modal, ModalFooter } from './organisms/Modal';

// Templates
export { DashboardTemplate } from './templates/DashboardTemplate';
export { AuthTemplate } from './templates/AuthTemplate';

// Re-export atom barrel
export * from './atoms';

// Re-export molecule barrel
export * from './molecules';

// Re-export organism barrel
export * from './organisms';

// Re-export template barrel
export * from './templates';
